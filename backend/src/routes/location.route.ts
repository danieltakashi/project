import express, { IRouter } from 'express';
import LocationController from '../controllers/location.controller';

class LocationRoutes {
  private LocationController = new LocationController();
  private router = express.Router();

  constructor() {
    this.routes();
  }

  private routes = () => {

    //route to get all locations
    this.router.get('', this.LocationController.getAllLocations);

    //route to get a single location by their id
    this.router.get('/:id', this.LocationController.getLocation);
  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default LocationRoutes;
