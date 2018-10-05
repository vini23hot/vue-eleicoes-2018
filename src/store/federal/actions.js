import { getCandidatesList, getCandidate } from '@/api';

const fetchPayload = async ({ commit }) => {
  try {
    const { candidatos } = await getCandidatesList('federal', 'SC');
    const promises = candidatos.map(candidato => getCandidate(candidato.id, 'SC'));
    const candidatesPayload = await Promise.all(promises);

    commit('SET_CANDIDATES', candidatesPayload);
  } catch (e) {
    console.error(e);
  }
};

export default {
  fetchPayload,
};
