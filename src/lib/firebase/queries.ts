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
  Timestamp
} from 'firebase/firestore';
import { db } from '../../firebase';

// 🔍 DEBUG: Log initialization
console.log('🔧 Firebase queries module loaded, db instance:', db ? '✅ OK' : '❌ NULL');

// Helper to convert Firestore snapshot to array
const snapshotToArray = (snapshot) => {
  return snapshot.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

// ============================================
// CLIENTS COLLECTION OPERATIONS
// ============================================

export const getClients = async (limit, startAfter) => {
  console.log('🔍 getClients called', { limit, startAfter: startAfter?.id });
  if (!db) {
    console.error('❌ getClients: Firestore database (db) is not initialized');
    throw new Error('Database not initialized. Please check Firebase configuration.');
  }
  try {
    const constraints = [orderBy('name')];
    if (limit) {
      constraints.push(limit(limit));
    }
    if (startAfter) {
      constraints.push(startAfter(startAfter));
    }
    const q = query(collection(db, 'quote_clients'), ...constraints);
    const snapshot = await getDocs(q);
    const result = {
      data: snapshotToArray(snapshot),
      lastDoc: snapshot.docs[snapshot.docs.length - 1] || null,
      hasMore: snapshot.docs.length === (limit || Number.MAX_SAFE_INTEGER)
    };
    console.log('✅ getClients success:', result.data.length, 'clients');
    return result;
  } catch (error) {
    console.error('❌ getClients error:', error);
    throw error;
  }
};

export const getClient = async (id) => {
  console.log('🔍 getClient called with id:', id);
  if (!db) {
    console.error('❌ getClient: Firestore database (db) is not initialized');
    throw new Error('Database not initialized. Please check Firebase configuration.');
  }
  try {
    const docRef = doc(db, 'quote_clients', id);
    const snapshot = await getDoc(docRef);
    const result = snapshot.exists ? { id: docRef.id, ...snapshot.data() } : null;
    console.log('✅ getClient result:', result ? 'found' : 'not found');
    return result;
  } catch (error) {
    console.error('❌ getClient error:', error);
    throw error;
  }
};

export const createClient = async (client) => {
  console.log('🚀 createClient called with:', { name: client.name, email: client.email, city: client.city });
  if (!db) {
    console.error('❌ createClient: Firestore database (db) is not initialized');
    throw new Error('Database not initialized. Please check Firebase configuration.');
  }
  try {
    const docRef = await addDoc(collection(db, 'quote_clients'), {
      ...client,
      createdAt: serverTimestamp(),
    });
    const result = { id: docRef.id, ...client };
    console.log('✅ createClient SUCCESS:', result);
    return result;
  } catch (error) {
    console.error('❌ createClient FAILED:', error.code || error.message, error);
    throw error;
  }
};

export const updateClient = async (id, client) => {
  console.log('🔄 updateClient called for id:', id, 'with:', { name: client.name });
  if (!db) {
    console.error('❌ updateClient: Firestore database (db) is not initialized');
    throw new Error('Database not initialized. Please check Firebase configuration.');
  }
  try {
    const clientRef = doc(db, 'quote_clients', id);
    await updateDoc(clientRef, {
      ...client,
      updatedAt: serverTimestamp(),
    });
    const result = { id, ...client };
    console.log('✅ updateClient SUCCESS:', result);
    return result;
  } catch (error) {
    console.error('❌ updateClient FAILED:', error.code || error.message, error);
    throw error;
  }
};

export const deleteClient = async (id) => {
  console.log('🗑️ deleteClient called for id:', id);
  if (!db) {
    console.error('❌ deleteClient: Firestore database (db) is not initialized');
    throw new Error('Database not initialized. Please check Firebase configuration.');
  }
  try {
    await deleteDoc(doc(db, 'quote_clients', id));
    console.log('✅ deleteClient SUCCESS');
  } catch (error) {
    console.error('❌ deleteClient FAILED:', error.code || error.message, error);
    throw error;
  }
};

// ============================================
// SERVICES COLLECTION OPERATIONS
// ============================================

export const getServices = async (limit, startAfter) => {
  console.log('🔍 getServices called');
  if (!db) {
    console.error('❌ getServices: Firestore database (db) is not initialized');
    throw new Error('Database not initialized. Please check Firebase configuration.');
  }
  try {
    const constraints = [orderBy('name')];
    if (limit) {
      constraints.push(limit(limit));
    }
    if (startAfter) {
      constraints.push(startAfter(startAfter));
    }
    const q = query(collection(db, 'services'), ...constraints);
    const snapshot = await getDocs(q);
    const result = {
      data: snapshotToArray(snapshot),
      lastDoc: snapshot.docs[snapshot.docs.length - 1] || null,
      hasMore: snapshot.docs.length === (limit || Number.MAX_SAFE_INTEGER)
    };
    console.log('✅ getServices success:', result.data.length, 'services');
    return result;
  } catch (error) {
    console.error('❌ getServices error:', error);
    throw error;
  }
};

export const getService = async (id) => {
  console.log('🔍 getService called with id:', id);
  if (!db) {
    console.error('❌ getService: Firestore database (db) is not initialized');
    throw new Error('Database not initialized. Please check Firebase configuration.');
  }
  try {
    const docRef = doc(db, 'services', id);
    const snapshot = await getDoc(docRef);
    const result = snapshot.exists ? { id: docRef.id, ...snapshot.data() } : null;
    return result;
  } catch (error) {
    console.error('❌ getService error:', error);
    throw error;
  }
};

export const createService = async (service) => {
  console.log('🚀 createService called with:', { name: service.name, price: service.unit_price });
  if (!db) {
    console.error('❌ createService: Firestore database (db) is not initialized');
    throw new Error('Database not initialized. Please check Firebase configuration.');
  }
  try {
    const docRef = await addDoc(collection(db, 'services'), {
      ...service,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    const result = { id: docRef.id, ...service };
    console.log('✅ createService SUCCESS:', result);
    return result;
  } catch (error) {
    console.error('❌ createService FAILED:', error.code || error.message, error);
    throw error;
  }
};

export const updateService = async (id, service) => {
  console.log('🔄 updateService called for id:', id);
  if (!db) {
    console.error('❌ updateService: Firestore database (db) is not initialized');
    throw new Error('Database not initialized. Please check Firebase configuration.');
  }
  try {
    const serviceRef = doc(db, 'services', id);
    await updateDoc(serviceRef, {
      ...service,
      updatedAt: serverTimestamp(),
    });
    const result = { id, ...service };
    console.log('✅ updateService SUCCESS:', result);
    return result;
  } catch (error) {
    console.error('❌ updateService FAILED:', error.code || error.message, error);
    throw error;
  }
};

export const deleteService = async (id) => {
  console.log('🗑️ deleteService called for id:', id);
  if (!db) {
    console.error('❌ deleteService: Firestore database (db) is not initialized');
    throw new Error('Database not initialized. Please check Firebase configuration.');
  }
  try {
    await deleteDoc(doc(db, 'services', id));
    console.log('✅ deleteService SUCCESS');
  } catch (error) {
    console.error('❌ deleteService FAILED:', error.code || error.message, error);
    throw error;
  }
};

// ============================================
// MATERIALS COLLECTION OPERATIONS
// ============================================

export const getMaterials = async (limit, startAfter) => {
  console.log('🔍 getMaterials called');
  if (!db) {
    console.error('❌ getMaterials: Firestore database (db) is not initialized');
    throw new Error('Database not initialized. Please check Firebase configuration.');
  }
  try {
    const constraints = [orderBy('name')];
    if (limit) {
      constraints.push(limit(limit));
    }
    if (startAfter) {
      constraints.push(startAfter(startAfter));
    }
    const q = query(collection(db, 'materials'), ...constraints);
    const snapshot = await getDocs(q);
    const result = {
      data: snapshotToArray(snapshot),
      lastDoc: snapshot.docs[snapshot.docs.length - 1] || null,
      hasMore: snapshot.docs.length === (limit || Number.MAX_SAFE_INTEGER)
    };
    console.log('✅ getMaterials success:', result.data.length, 'materials');
    return result;
  } catch (error) {
    console.error('❌ getMaterials error:', error);
    throw error;
  }
};

export const getMaterial = async (id) => {
  console.log('🔍 getMaterial called with id:', id);
  if (!db) {
    console.error('❌ getMaterial: Firestore database (db) is not initialized');
    throw new Error('Database not initialized. Please check Firebase configuration.');
  }
  try {
    const docRef = doc(db, 'materials', id);
    const snapshot = await getDoc(docRef);
    const result = snapshot.exists ? { id: docRef.id, ...snapshot.data() } : null;
    return result;
  } catch (error) {
    console.error('❌ getMaterial error:', error);
    throw error;
  }
};

export const createMaterial = async (material) => {
  console.log('🚀 createMaterial called with:', { name: material.name, price: material.unit_price });
  if (!db) {
    console.error('❌ createMaterial: Firestore database (db) is not initialized');
    throw new Error('Database not initialized. Please check Firebase configuration.');
  }
  try {
    const docRef = await addDoc(collection(db, 'materials'), {
      ...material,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    const result = { id: docRef.id, ...material };
    console.log('✅ createMaterial SUCCESS:', result);
    return result;
  } catch (error) {
    console.error('❌ createMaterial FAILED:', error.code || error.message, error);
    throw error;
  }
};

export const updateMaterial = async (id, material) => {
  console.log('🔄 updateMaterial called for id:', id);
  if (!db) {
    console.error('❌ updateMaterial: Firestore database (db) is not initialized');
    throw new Error('Database not initialized. Please check Firebase configuration.');
  }
  try {
    const materialRef = doc(db, 'materials', id);
    await updateDoc(materialRef, {
      ...material,
      updatedAt: serverTimestamp(),
    });
    const result = { id, ...material };
    console.log('✅ updateMaterial SUCCESS:', result);
    return result;
  } catch (error) {
    console.error('❌ updateMaterial FAILED:', error.code || error.message, error);
    throw error;
  }
};

export const deleteMaterial = async (id) => {
  console.log('🗑️ deleteMaterial called for id:', id);
  if (!db) {
    console.error('❌ deleteMaterial: Firestore database (db) is not initialized');
    throw new Error('Database not initialized. Please check Firebase configuration.');
  }
  try {
    await deleteDoc(doc(db, 'materials', id));
    console.log('✅ deleteMaterial SUCCESS');
  } catch (error) {
    console.error('❌ deleteMaterial FAILED:', error.code || error.message, error);
    throw error;
  }
};

// ============================================
// QUOTE ITEMS OPERATIONS
// ============================================

export const getQuoteItems = async (quoteId) => {
  if (!db) {
    console.error('❌ getQuoteItems: Firestore database (db) is not initialized');
    throw new Error('Database not initialized. Please check Firebase configuration.');
  }
  try {
    const q = query(
      collection(db, 'quotes', quoteId, 'items'),
      orderBy('display_order'),
      orderBy('createdAt')
    );
    const snapshot = await getDocs(q);
    const result = snapshotToArray(snapshot);
    return result;
  } catch (error) {
    console.error('❌ getQuoteItems error:', error);
    throw error;
  }
};

export const createQuoteItem = async (quoteId, item) => {
  if (!db) {
    console.error('❌ createQuoteItem: Firestore database (db) is not initialized');
    throw new Error('Database not initialized. Please check Firebase configuration.');
  }
  try {
    const docRef = await addDoc(collection(db, 'quotes', quoteId, 'items'), {
      ...item,
      createdAt: serverTimestamp(),
    });
    return { id: docRef.id, ...item };
  } catch (error) {
    console.error('❌ createQuoteItem error:', error);
    throw error;
  }
};

export const updateQuoteItem = async (quoteId, itemId, item) => {
  if (!db) {
    console.error('❌ updateQuoteItem: Firestore database (db) is not initialized');
    throw new Error('Database not initialized. Please check Firebase configuration.');
  }
  try {
    const itemRef = doc(db, 'quotes', quoteId, 'items', itemId);
    await updateDoc(itemRef, item);
    console.log('✅ updateQuoteItem success');
  } catch (error) {
    console.error('❌ updateQuoteItem error:', error);
    throw error;
  }
};

export const deleteQuoteItem = async (quoteId, itemId) => {
  if (!db) {
    console.error('❌ deleteQuoteItem: Firestore database (db) is not initialized');
    throw new Error('Database not initialized. Please check Firebase configuration.');
  }
  try {
    await deleteDoc(doc(db, 'quotes', quoteId, 'items', itemId));
    console.log('✅ deleteQuoteItem success');
  } catch (error) {
    console.error('❌ deleteQuoteItem error:', error);
    throw error;
  }
};

// ============================================
// QUOTES COLLECTION OPERATIONS
// ============================================

export const generateQuoteNumber = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const timestamp = Date.now().toString().slice(-6);
  return `ORC-${year}-${month}-${timestamp}`;
};

export const getQuotes = async (filters = {}, limit, startAfter) => {
  console.log('🔍 getQuotes called', { filters, limit });
  if (!db) {
    console.error('❌ getQuotes: Firestore database (db) is not initialized');
    throw new Error('Database not initialized. Please check Firebase configuration.');
  }
  try {
    const baseQueryConstraints = [orderBy('createdAt', 'desc')];

    if (filters?.status && filters.status.length > 0) {
      baseQueryConstraints.push(where('status', 'in', filters.status));
    }

    if (limit) {
      baseQueryConstraints.push(limit(limit));
    }

    if (startAfter) {
      baseQueryConstraints.push(startAfter(startAfter));
    }

    const q = query(collection(db, 'quotes'), ...baseQueryConstraints);
    const snapshot = await getDocs(q);
    let quotes = snapshotToArray(snapshot);

    // Client-side filtering for search
    if (filters?.search) {
      const searchLower = filters.search.toLowerCase();
      quotes = quotes.filter(q =>
        q.description?.toLowerCase().includes(searchLower) ||
        (q.clientName?.toLowerCase() || '').includes(searchLower)
      );
    }

    return {
      data: quotes,
      lastDoc: snapshot.docs[snapshot.docs.length - 1] || null,
      hasMore: snapshot.docs.length === (limit || Number.MAX_SAFE_INTEGER)
    };
  } catch (error) {
    console.error('❌ getQuotes error:', error);
    throw error;
  }
};

export const getQuote = async (id) => {
  console.log('🔍 getQuote called with id:', id);
  if (!db) {
    console.error('❌ getQuote: Firestore database (db) is not initialized');
    throw new Error('Database not initialized. Please check Firebase configuration.');
  }
  try {
    const quoteRef = doc(db, 'quotes', id);
    console.log('🔍 getQuote: Document reference created:', quoteRef.path);

    const quoteSnap = await getDoc(quoteRef);
    console.log('🔍 getQuote: Document snapshot exists:', quoteSnap.exists());

    if (!quoteSnap.exists()) {
      console.log('⚠️ getQuote: Quote not found');
      return null;
    }

    const quoteData = quoteSnap.data();
    console.log('🔍 getQuote: Quote data:', quoteData);

    const quote = {
      id: quoteRef.id,
      ...quoteData
    };

    // Get the items from subcollection
    console.log('🔍 getQuote: Fetching items from subcollection...');
    const items = await getQuoteItems(id);
    console.log('🔍 getQuote: Items fetched:', items.length, 'items');
    quote.items = items;

    return quote;
  } catch (error) {
    console.error('❌ getQuote error:', error);
    console.error('📋 Full error:', JSON.stringify(error, null, 2));
    throw error;
  }
};

export const createQuote = async (quoteData) => {
  console.log('🚀 createQuote called with:', {
    client_id: quoteData.client_id,
    description: quoteData.description,
    itemsCount: quoteData.items?.length || 0
  });
  if (!db) {
    console.error('❌ createQuote: Firestore database (db) is not initialized');
    throw new Error('Database not initialized. Please check Firebase configuration.');
  }
  try {
    const quoteNumber = generateQuoteNumber();

    const docRef = await addDoc(collection(db, 'quotes'), {
      ...quoteData,
      quote_number: quoteNumber,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    console.log('✅ Quote doc created with ID:', docRef.id);

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
      console.log('✅ Quote items batch created:', quoteData.items.length, 'items');
    }

    const result = { id: docRef.id, quote_number: quoteNumber, ...quoteData };
    console.log('✅ createQuote COMPLETE:', result);
    return result;
  } catch (error) {
    console.error('❌ createQuote FAILED:', error.code || error.message, error);
    throw error;
  }
};

export const updateQuote = async (id, quoteData) => {
  console.log('🔄 updateQuote called for id:', id);
  if (!db) {
    console.error('❌ updateQuote: Firestore database (db) is not initialized');
    throw new Error('Database not initialized. Please check Firebase configuration.');
  }
  try {
    const quoteRef = doc(db, 'quotes', id);

    await updateDoc(quoteRef, {
      ...quoteData,
      updatedAt: serverTimestamp(),
    });
    console.log('✅ Quote doc updated');

    // Update items in subcollection: delete existing and create new ones
    if (quoteData.items && quoteData.items.length > 0) {
      console.log('🔧 Updating quote items...');
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
      console.log('✅ Quote items batch updated:', quoteData.items.length, 'items');
    }

    return { id, ...quoteData };
  } catch (error) {
    console.error('❌ updateQuote FAILED:', error.code || error.message, error);
    throw error;
  }
};

export const deleteQuote = async (id) => {
  console.log('🗑️ deleteQuote called for id:', id);
  if (!db) {
    console.error('❌ deleteQuote: Firestore database (db) is not initialized');
    throw new Error('Database not initialized. Please check Firebase configuration.');
  }
  try {
    // Delete items from subcollection first
    const items = await getQuoteItems(id);
    const batch = writeBatch(db);

    items.forEach(item => {
      const itemRef = doc(db, 'quotes', id, 'items', item.id);
      batch.delete(itemRef);
    });

    await batch.commit();
    console.log('✅ Quote items deleted');

    // Delete the quote
    await deleteDoc(doc(db, 'quotes', id));
    console.log('✅ deleteQuote COMPLETE');
  } catch (error) {
    console.error('❌ deleteQuote FAILED:', error.code || error.message, error);
    throw error;
  }
};
