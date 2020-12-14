/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';
import { Model } from 'sequelize';
import { ILocation } from '../interfaces/location.interface';

export default (sequelize, DataTypes) => {
  class Location extends Model<ILocation> {
    public locationAccount;
    public businessName;
    public dbaName;
    public streetAddress;
    public city;
    public zipCode;
    public locationDescription;
    public mailAddress;
    public mailCity;
    public mailZipCode;
    public naics;
    public primaryNaics;
    public councilDistrict;
    public startDate;
    public endDate;
    public location;

    static associate(models) {
      // define association here
    }
  };
  Location.init({
    locationAccount: DataTypes.STRING,
    businessName: DataTypes.STRING,
    dbaName: DataTypes.STRING,
    streetAddress: DataTypes.STRING,
    city: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    locationDescription: DataTypes.STRING,
    mailAddress: DataTypes.STRING,
    mailCity: DataTypes.STRING,
    mailZipCode: DataTypes.STRING,
    naics: DataTypes.STRING,
    primaryNaics: DataTypes.STRING,
    councilDistrict: DataTypes.STRING,
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING,
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'location',
  });
  return Location;
};