import Overview from './components/overview/Overview.vue'
import Assign from './components/assign/Assign.vue'
import DepartmentStats from './components/departmentstats/DepartmentStats.vue'
import SubmitOrder from './components/submit/SubmitOrder.vue'

export const routes = [
  {path: '', component: Overview},
  {path: '/assign', component: Assign},
  {path: '/departmentstats', component: DepartmentStats},
  {path: '/submit', component: SubmitOrder}
];
