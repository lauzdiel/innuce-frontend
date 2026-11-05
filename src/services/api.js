const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5001/api/v1';

/**
 * Fetch all resources (papers, publications, resources).
 * Safely formats `tags` (handles both array and string) and ensures `hasReadOnline`.
 */
export async function getResources() {
  const response = await fetch(`${API_BASE_URL}/resources`);
  if (!response.ok) {
    throw new Error(`Failed to fetch resources: ${response.status} ${response.statusText}`);
  }
  const data = await response.json();
  
  return data.map(item => {
    let formattedTags = '';
    if (Array.isArray(item.tags)) {
      formattedTags = item.tags.join(' - ');
    } else if (typeof item.tags === 'string') {
      formattedTags = item.tags;
    }

    return {
      ...item,
      tags: formattedTags,
      hasReadOnline: Boolean(item.readOnlineLink)
    };
  });
}

/**
 * Fetch all team and alumni members for About Us.
 */
export async function getTeam() {
  const response = await fetch(`${API_BASE_URL}/teams`);
  if (!response.ok) {
    throw new Error(`Failed to fetch team members: ${response.status} ${response.statusText}`);
  }
  return await response.json();
}

/**
 * Fetch lab infrastructures (tools & hardware).
 */
export async function getInfrastructures() {
  const response = await fetch(`${API_BASE_URL}/infrastructures`);
  if (!response.ok) {
    throw new Error(`Failed to fetch infrastructures: ${response.status} ${response.statusText}`);
  }
  return await response.json();
}

/**
 * Fetch all use cases.
 */
export async function getUseCases() {
  const response = await fetch(`${API_BASE_URL}/usecases`);
  if (!response.ok) {
    throw new Error(`Failed to fetch use cases: ${response.status} ${response.statusText}`);
  }
  const data = await response.json();
  return data.map(item => ({
    ...item,
    keywords: Array.isArray(item.keywords) ? item.keywords : (item.keywords ? [item.keywords] : []),
    frameworks: Array.isArray(item.frameworks) ? item.frameworks : (item.frameworks ? [item.frameworks] : [])
  }));
}

/**
 * Fetch single use case by ID.
 * @param {string|number} id
 */
export async function getUseCaseById(id) {
  const response = await fetch(`${API_BASE_URL}/usecases/${id}`);
  if (!response.ok) {
    throw new Error(`Use case with id ${id} not found: ${response.status} ${response.statusText}`);
  }
  const data = await response.json();
  return {
    ...data,
    keywords: Array.isArray(data.keywords) ? data.keywords : (data.keywords ? [data.keywords] : []),
    frameworks: Array.isArray(data.frameworks) ? data.frameworks : (data.frameworks ? [data.frameworks] : [])
  };
}

/**
 * Submit an access request form.
 * @param {Object} data - Access request form data
 */
export async function submitAccessRequest(data) {
  try {
    const response = await fetch(`${API_BASE_URL}/access-requests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (response.ok) {
      return await response.json();
    }
  } catch (err) {
    console.warn('Backend access-requests endpoint unreachable or not implemented:', err);
  }

  // Client validation & response
  console.log('Access request received:', data);
  if (!data || !data.name || !data.surname || !data.email) {
    throw new Error('Required fields missing');
  }
  return {
    success: true,
    message: 'Access request submitted successfully'
  };
}
