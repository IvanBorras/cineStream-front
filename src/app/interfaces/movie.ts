export interface Movie {
  _id: string,  
  title: {
        type: string;
        required: true;
      };
      director: {
        type: string;
        required: true;
      };
      actors: {
        type: string;
        required: true;
      };
      year: {
        type: number;
        required: true;
      };
      thema: {
        type: string;
        required: true;
      };
      synopsis: {
        type: string;
        required: true;
      };
      image: {
        type: string;
        required: true;
      };
      valoration: {
        type: number;
        required: true;
      };
      ageRestriction: {
        type: string;
        required: true;
      };
      trailer: {
        type: string;
        required: true;
      };
      pricePerDay: {
        type: number;
        required: true;
      };
      available: {
        type: boolean;
        default: true;
      };

}



