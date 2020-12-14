import sequelize, { DataTypes } from '../config/database';
import { ILocation } from '../interfaces/location.interface';
import location from '../models/location';

class LocationService {
  private Location = location(sequelize, DataTypes);

  //get all locations
  public getAllLocations = async (): Promise<ILocation[]> => {
    const data = await this.Location.findAll();
    return data;
  };

  //create a new location
  public newLocation = async (body) => {
    const data = await this.Location.create(body);
    return data;
  };

  //update a location
  public updateLocation = async (id, body) => {
    await this.Location.update(body, {
      where: { id: id }
    });
    return body;
  };

  //delete a location
  public deleteLocation = async (id) => {
    await this.Location.destroy({ where: { id: id } });
    return '';
  };

  //get a single location
  public getLocation = async (id) => {
    const data = await this.Location.findByPk(id);
    return data;
  };
}

export default LocationService;
