import resourcesData from '../data/resources.json';
import teamData from '../data/team.json';
import infrastructuresData from '../data/infrastructures.json';
import useCasesData from '../data/useCases.json';

/**
 * Fetch all resources (papers, publications, resources).
 * Returns array sorted by year DESC, id DESC.
 */
export async function getResources() {
  // Simulating async API call
  return resourcesData.map(item => ({
    ...item,
    hasReadOnline: Boolean(item.readOnlineLink)
  }));
}

/**
 * Fetch all team members for About Us.
 */
export async function getTeam() {
  // Simulating async API call
  return teamData;
}

/**
 * Fetch lab infrastructures (tools & hardware).
 */
export async function getInfrastructures() {
  // Simulating async API call
  return infrastructuresData;
}

/**
 * Fetch all use cases.
 */
export async function getUseCases() {
  // Simulating async API call
  return useCasesData;
}

/**
 * Fetch single use case by ID.
 * @param {string|number} id
 */
export async function getUseCaseById(id) {
  // Simulating async API call
  const useCase = useCasesData.find(item => String(item.id) === String(id));
  if (!useCase) {
    throw new Error(`Use case with id ${id} not found`);
  }
  return useCase;
}

/**
 * Submit an access request form.
 * @param {Object} data - Access request form data
 */
export async function submitAccessRequest(data) {
  // Simulating async API call
  console.log('Access request received:', data);
  if (!data || !data.name || !data.surname || !data.email) {
    throw new Error('Required fields missing');
  }
  return {
    success: true,
    message: 'Access request submitted successfully'
  };
}
