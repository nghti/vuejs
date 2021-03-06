import DashboardService from '../../../api/dashboard';
import { error } from '../../../utils/toastr';

export default {
  async getUsers({ commit }) {
    try {
      const { data } = await DashboardService.getUsers();
      commit('SET_USERS', data);
    } catch (e) {
      error(window.trans('error'));
    }
  },

  async delUsers({ commit }, payload) {
    console.log('payload', payload);
    try {
      const data = await DashboardService.delUsers(payload);
      console.log('data', data);
      commit('SET_USERS', data);
    } catch (e) {
      error(window.trans('error'));
    }
  },
};
