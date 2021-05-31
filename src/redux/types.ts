export const LOADING = "LOADING";
export const ERROR = "ERROR";
export const TRENDING = "TRENDING";
export const STICKER = "STICKER";
export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";
export const IS_LOGIN = "IS_LOGIN";

export interface RegisterState {
  data: {
    embeds: string[];
    firstname: string;
    lastname: string;
    phone: string;
    password: string | null;
    email: string;
    remember_token: null;
    gender: string | null;
    photo_url: string | null;
    metadata: [];
    email_verified: boolean;
    email_verified_at: string | null;
    id: string;
    updated_at: string;
    created_at: string;
    customer: {
      data: {
        embeds: string[];
        id: string;
        domain_slug: string | null;
        name: string;
        contact_firstname: string;
        contact_lastname: string;
        contact_phone: string;
        contact_email: string;
        channel: string;
        is_registered: boolean;
        metadata: [];
        kyc_completed_at: string | null;
        disabled_at: string | null;
        is_trashed: boolean;
        deleted_at: string | null;
        created_at: string;
        updated_at: string;
      };
    };
  };
}

export interface LoginState {
  customer: {
    data: {
      id: string;
      name: string;
      registered_name: null;
      logo_url: null;
    };
  };
  user: string;
  role: string;
  permissions: string[];
  token: string;
  token_expiry: number;
  enforce_2fa: true;
  otp_channel: string;
}

export interface TrendingState {
  type: string;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: string;
  trending_datetime: string;
  images: {
    original: {
      height: string;
      width: string;
      size: string;
      url: string;
      mp4_size: string;
      mp4: string;
      webp_size: string;
      webp: string;
      frames: string;
      hash: string;
    };
    downsized_still: {
      height: string;
      width: string;
      size: string;
      url: string;
    };
    fixed_height: {
      height: string;
      width: string;
      size: string;
      url: string;
      mp4_size: string;
      mp4: string;
      webp_size: string;
      webp: string;
    };
    fixed_height_small: {
      height: string;
      width: string;
      size: string;
      url: string;
      mp4_size: string;
      mp4: string;
      webp_size: string;
      webp: string;
    };
    fixed_width: {
      height: string;
      width: string;
      size: string;
      url: string;
      mp4_size: string;
      mp4: string;
      webp_size: string;
      webp: string;
    };
    fixed_width_small: {
      height: string;
      width: string;
      size: string;
      url: string;
      mp4_size: string;
      mp4: string;
      webp_size: string;
      webp: string;
    };
    fixed_width_still: {
      height: string;
      width: string;
      size: string;
      url: string;
    };
  };
  user: {
    avatar_url: string;
    banner_image: string;
    banner_url: string;
    profile_url: string;
    username: string;
    display_name: string;
    description: string;
    instagram_url: string;
    website_url: string;
    is_verified: boolean;
  };
  analytics_response_payload: string;
  analytics: {
    onload: {
      url: string;
    };
    onclick: {
      url: string;
    };
    onsent: {
      url: string;
    };
  };
}

export interface StickerState {
  type: string;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: string;
  trending_datetime: string;
  images: {
    hd: {
      height: string;
      mp4: string;
      mp4_size: string;
      width: string;
    };
    original: {
      height: string;
      width: string;
      size: string;
      url: string;
      mp4_size: string;
      mp4: string;
      webp_size: string;
      webp: string;
      frames: string;
      hash: string;
    };
    downsized: {
      height: string;
      width: string;
      size: string;
      url: string;
    };
    downsized_still: {
      height: string;
      width: string;
      size: string;
      url: string;
    };
    fixed_height: {
      height: string;
      width: string;
      size: string;
      url: string;
      mp4_size: string;
      mp4: string;
      webp_size: string;
      webp: string;
    };
    fixed_height_still: {
      height: string;
      width: string;
      size: string;
      url: string;
    };
    fixed_width: {
      height: string;
      width: string;
      size: string;
      url: string;
      mp4_size: string;
      mp4: string;
      webp_size: string;
      webp: string;
    };
    fixed_width_small: {
      height: string;
      width: string;
      size: string;
      url: string;
      mp4_size: string;
      mp4: string;
      webp_size: string;
      webp: string;
    };
    fixed_width_still: {
      height: string;
      width: string;
      size: string;
      url: string;
    };
    looping: {
      mp4_size: string;
      mp4: string;
    };
    original_still: {
      height: string;
      width: string;
      size: string;
      url: string;
    };
    original_mp4: {
      height: string;
      width: string;
      mp4_size: string;
      mp4: string;
    };
    preview: {
      height: string;
      width: string;
      mp4_size: string;
      mp4: string;
    };
    preview_gif: {
      height: string;
      width: string;
      size: string;
      url: string;
    };
    preview_webp: {
      height: string;
      width: string;
      size: string;
      url: string;
    };
  };
  user: {
    avatar_url: string;
    banner_image: string;
    banner_url: string;
    profile_url: string;
    username: string;
    display_name: string;
    description: string;
    instagram_url: string;
    website_url: string;
    is_verified: false;
  };
  analytics_response_payload: string;
  analytics: {
    onload: {
      url: string;
    };
    onclick: {
      url: string;
    };
    onsent: {
      url: string;
    };
  };
}

interface RegisterAction {
  type: typeof REGISTER;
  payload: RegisterState;
}

interface TrendingAction {
  type: typeof TRENDING;
  payload: TrendingState[];
}

interface StickerAction {
  type: typeof STICKER;
  payload: StickerState[];
}

interface LoadingAction {
  type: typeof LOADING;
}

interface IsLoginAction {
  type: typeof IS_LOGIN;
  payload: boolean;
}

interface ErrorAction {
  type: typeof ERROR;
  payload: string;
}

interface LoginAction {
  type: typeof LOGIN;
  payload: LoginState;
}

export type GiphyAction =
  | TrendingAction
  | LoadingAction
  | ErrorAction
  | IsLoginAction
  | LoginAction
  | RegisterAction
  | StickerAction;
