export interface PropertyListingType {
  address: string;
  amenities: {
    amenities: [{ 
      level: string,
      list: Array<string>
    }]
  }
  bathroomCount: string
  developerDetails: string;
  developerLogo: any;
  floorArea: string
  fullDescription: string;
  onLandingPage: boolean;
  projectBannerFull: any;
  projectBuildingFeatures: {
    project_features: [{ feature: string, list?: Array<string> }]
  }
  projectLandingThumbnail: any;
  projectDescriptionImage: any;
  projectName: string;
  projectPrice: number;
  projectThumbnail: any;
  gallery: Array<any>;
  roomCount: string;
  shortDescription: string;
  slug: string;
  unitArea: string;
  unitFeatures: {
    unit_features: [{ feature: string, list?: Array<string> }]
  }
}