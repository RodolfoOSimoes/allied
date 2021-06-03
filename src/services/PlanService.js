import Service from './Service';

class PlanService extends Service {
  static getByPlatform(platformSku) {
    return PlanService.client().get(`/planos/${platformSku}`);
  }
}

export default PlanService;
