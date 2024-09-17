export interface ImageProps {
    type:            string;
    id:              number;
    title:           string;
    price:           number;
    author:          string;
    created_at:      string;
    main_attachment: MainAttachment;
    likes_count:     number;
    liked:           boolean;
    links:           Link[];
  }
  
  export interface Link {
    rel:     string;
    uri:     string;
    methods: string;
  }
  
  export interface MainAttachment {
    big:   string;
    small: string;
  }

  