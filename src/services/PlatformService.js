import Service from './Service';

class PlatformService extends Service {
  static list() {
    return PlatformService.client().get('/plataformas');
  }
}

export default PlatformService;
