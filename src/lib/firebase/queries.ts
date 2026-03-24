import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  where,
  serverTimestamp,
  writeBatch,
  Timestamp,
  DocumentData,
  QueryConstraint,
  DocumentReference,
  DocumentSnapshot,
  QuerySnapshot
} from 'firebase/firestore';
import { db } from '../../firebase';

// Helper to convert Firestore snapshot to array
const snapshotToArray = (snapshot: DocumentSnapshot<DocumentData>[]) => {
  return snapshot.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

// Clients collection operations - using quote_clients
export const getClients = async () => {
  const q = query(collection(db, 'quote_clients'), orderBy('name'));
  const snapshot = await getDocs(q);
  return snapshotToArray(snapshot);
};

export const getClient = async (id: string) => {
  const docRef = doc(db, 'quote_clients', id);
  const snapshot = await getDoc(docRef);
  return snapshot.exists ? { id: docRef.id, ...snapshot.data() } : null;
};

export const createClient = async (client: any) => {
  const docRef = await addDoc(collection(db, 'quote_clients'), {
    ...client,
    createdAt: serverTimestamp(),
  });
  return { id: docRef.id, ...client };
};

export const updateClient = async (id: string, client: any) => {
  const clientRef = doc(db, 'quote_clients', id);
  await updateDoc(clientRef, {
    ...client,
    updatedAt: serverTimestamp(),
  });
  return { id, ...client };
};

export const deleteClient = async (id: string) => {
  await deleteDoc(doc(db, 'quote_clients', id));
};

// Services collection operations
export const getServices = async () => {
  const q = query(collection(db, 'services'), orderBy('name'));
  const snapshot = await getDocs(q);
  return snapshotToArray(snapshot);
};

export const getService = async (id: string) => {
  const docRef = doc(db, 'services', id);
  const snapshot = await getDoc(docRef);
  return snapshot.exists ? { id: docRef.id, ...snapshot.data() } : null;
};

export const createService = async (service: any) => {
  const docRef = await addDoc(collection(db, 'services'), {
    ...service,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return { id: docRef.id, ...service };
};

export const updateService = async (id: string, service: any) => {
  const serviceRef = doc(db, 'services', id);
  await updateDoc(serviceRef, {
    ...service,
    updatedAt: serverTimestamp(),
  });
  return { id, ...service };
};

export const deleteService = async (id: string) => {
  await deleteDoc(doc(db, 'services', id));
};

// Materials collection operations
export const getMaterials = async () => {
  const q = query(collection(db, 'materials'), orderBy('name'));
  const snapshot = await getDocs(q);
  return snapshotToArray(snapshot);
};

export const getMaterial = async (id: string) => {
  const docRef = doc(db, 'materials', id);
  const snapshot = await getDoc(docRef);
  return snapshot.exists ? { id: docRef.id, ...snapshot.data() } : null;
};

export const createMaterial = async (material: any) => {
  const docRef = await addDoc(collection(db, 'materials'), {
    ...material,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return { id: docRef.id, ...material };
};

export const updateMaterial = async (id: string, material: any) => {
  const materialRef = doc(db, 'materials', id);
  await updateDoc(materialRef, {
    ...material,
    updatedAt: serverTimestamp(),
  });
  return { id, ...material };
};

export const deleteMaterial = async (id: string) => {
  await deleteDoc(doc(db, 'materials', id));
};

// Quote items operations (as a subcollection of quotes)
export const getQuoteItems = async (quoteId: string) => {
  const q = query(
    collection(db, 'quotes', quoteId, 'items'),
    orderBy('display_order'),
    orderBy('createdAt')
  );
  const snapshot = await getDocs(q);
  return snapshotToArray(snapshot);
};

export const createQuoteItem = async (quoteId: string, item: any) => {
  const docRef = await addDoc(collection(db, 'quotes', quoteId, 'items'), {
    ...item,
    createdAt: serverTimestamp(),
  });
  return { id: docRef.id, ...item };
};

export const updateQuoteItem = async (quoteId: string, itemId: string, item: any) => {
  const itemRef = doc(db, 'quotes', quoteId, 'items', itemId);
  await updateDoc(itemRef, item);
};

export const deleteQuoteItem = async (quoteId: string, itemId: string) => {
  await deleteDoc(doc(db, 'quotes', quoteId, 'items', itemId));
};

// Bulk operations for quote items (reordering)
export const reorderQuoteItems = async (quoteId: string, items: Array<{ id: string; display_order: number }>) => {
  const batch = writeBatch(db);
  items.forEach(item => {
    const itemRef = doc(db, 'quotes', quoteId, 'items', item.id);
    batch.update(itemRef, { display_order: item.display_order });
  });
  await batch.commit();
};

// Quotes collection operations
export interface Quote extends DocumentData {
  id?: string;
  quote_number: string;
  client_id: string;
  status: 'negotiation' | 'approved' | 'execution' | 'finished' | 'lost';
  description: string;
  discount: number;
  total: number;
  issue_date: string;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

export const generateQuoteNumber = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  // No Firebase, precisamos buscar o último número para gerar o próximo
  // Por enquanto, usar timestamp como parte do número
  const timestamp = Date.now().toString().slice(-6);
  return `ORC-${year}-${month}-${timestamp}`;
};

export const getQuotes = async (filters?: {
  status?: string[];
  search?: string;
}) => {
  const baseQueryConstraints: QueryConstraint[] = [
    orderBy('createdAt', 'desc')
  ];

  if (filters?.status && filters.status.length > 0) {
    baseQueryConstraints.push(where('status', 'in', filters.status));
  }

  const q = query(collection(db, 'quotes'), ...baseQueryConstraints);
  const snapshot = await getDocs(q);
  let quotes = snapshotToArray(snapshot);

  // Client-side filtering for search (Firestore doesn't support ILIKE)
  if (filters?.search) {
    const searchLower = filters.search.toLowerCase();
    quotes = quotes.filter(q =>
      q.description?.toLowerCase().includes(searchLower) ||
      (q as any).clientName?.toLowerCase().includes(searchLower)
    );
  }

  return quotes;
};

export const getQuote = async (id: string) => {
  // Get the quote
  const quoteRef = doc(db, 'quotes', id);
  const quoteSnap = await getDoc(quoteRef);

  if (!quoteSnap.exists()) {
    return null;
  }

  const quote: Quote = {
    id: quoteRef.id,
    ...quoteSnap.data()
  } as Quote;

  // Get the items from subcollection
  const items = await getQuoteItems(id);
  quote.items = items as any;

  return quote;
};

export const createQuote = async (quoteData: Partial<Quote> & { items?: any[] }) => {
  const quoteNumber = generateQuoteNumber();

  const docRef = await addDoc(collection(db, 'quotes'), {
    ...quoteData,
    quote_number: quoteNumber,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  // Create items in subcollection quotes/{quoteId}/items
  if (quoteData.items && quoteData.items.length > 0) {
    const batch = writeBatch(db);
    quoteData.items.forEach((item, index) => {
      const itemRef = doc(collection(db, 'quotes', docRef.id, 'items'));
      batch.set(itemRef, {
        ...item,
        display_order: index,
        createdAt: serverTimestamp(),
      });
    });
    await batch.commit();
  }

  return { id: docRef.id, quote_number: quoteNumber, ...quoteData };
};

export const updateQuote = async (id: string, quoteData: Partial<Quote> & { items?: any[] }) => {
  const quoteRef = doc(db, 'quotes', id);

  await updateDoc(quoteRef, {
    ...quoteData,
    updatedAt: serverTimestamp(),
  });

  // Update items in subcollection: delete existing and create new ones
  if (quoteData.items && quoteData.items.length > 0) {
    // Get existing items from subcollection
    const existingItems = await getQuoteItems(id);
    const batch = writeBatch(db);

    // Delete existing items from subcollection
    existingItems.forEach(item => {
      const itemRef = doc(db, 'quotes', id, 'items', item.id);
      batch.delete(itemRef);
    });

    // Create new items in subcollection
    quoteData.items.forEach((item, index) => {
      const itemRef = doc(collection(db, 'quotes', id, 'items'));
      batch.set(itemRef, {
        ...item,
        display_order: index,
        createdAt: serverTimestamp(),
      });
    });

    await batch.commit();
  }

  return { id, ...quoteData };
};

export const deleteQuote = async (id: string) => {
  // Delete items from subcollection first
  const items = await getQuoteItems(id);
  const batch = writeBatch(db);

  items.forEach(item => {
    const itemRef = doc(db, 'quotes', id, 'items', item.id);
    batch.delete(itemRef);
  });

  await batch.commit();

  // Delete the quote
  await deleteDoc(doc(db, 'quotes', id));
};
