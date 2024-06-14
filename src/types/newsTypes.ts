// Define interface for SubMenu
export interface SubMenu {
    _id: string;
    subMenuTitle: string;
    subMenuOrder: number;
    menu: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  
  // Define interface for Menu
 export  interface Menu {
    _id: string;
    menuTitle: string;
    menuOrder: number;
    status: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    layout?: string; // layout is optional
    isShownOnNavbar: boolean;
  }
  
  // Define interface for Layout
 export  interface Layout {
    _id: string;
    layoutTitle: string;
    status: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  
  // Define interface for AppSettings
  interface AppSettings {
    menus: Menu[];
    subMenus: SubMenu[];
    layout: Layout[];
  }
  
  // Define interface for the root object
  export interface AppSettingsPorps {
    appSettings: AppSettings;
  }
  

  interface Owner {
    _id: string;
    fullName: string;
    avatar: string;
  }
  
  export interface News {
    _id: string;
    newsTitle: string;
    shortDescription: string;
    content?: string;
    isPublished?: boolean;
    tags?: string[];
    recommendedNews: string[];
    owner: Owner;
    isHighlighted?: boolean;
    bannerImage?: string;
    province?: string | null;
    isShowNewsOnProvince?: boolean;
    isDraft?: boolean;
    views?: string;
    comments?: string[];
    menu?: string;
    createdAt: string | Date;
    updatedAt?: string;
    __v?: number;
  }
  

  export interface CommentResponse {
    message: string;
    code: number;
    data: Comment | [];
}

// Example usage with an array of comments
export interface Comment {
    _id: string;
    comment: string;
    owner: Owner; 
    news: string;
    likes: string[]; 
    disLikes: string[];
    replies: Array<{
        comment: string;
        owner: string;
    }>;
    createdAt: string;
    updatedAt: string;
}

interface Owner {
  _id: string;
  fullName: string;
  avatar: string;
}


