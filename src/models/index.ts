
    export interface Crew {
        id: number;
        super_admin_id: string;
        max_users: number;
        name: string;
        description: string;
        profile_image_path: string;
        cover_image_path: string;
        genres: any[];
        type: string;
        users: number;
        songs_count: number;
        follows: number;
        followers: number;
        date_created: Date;
        location?: any;
        user_role: string;
        date_joined: Date;
        new_activity: boolean;
    }

    export interface Artist {
        id: string;
        name: string;
        artist_name: string;
        muted: boolean;
        place?: any;
        country?: any;
        followers: number;
        follows: number;
        liked: number;
        releases: number;
        favorites: number;
        description: string;
        profile_image_path: string;
        cover_image_path: string;
        favorite_genres: any[];
        created: Date;
        location?: any;
        social_accounts?: any;
        crews: Crew[];
    }

    export interface SongGenre {
        id: number;
        name: string;
    }

    export interface Song {
        id: string;
        name: string;
        name_seo: string;
        artist: Artist;
        artist_name: string;
        duration: number;
        bpm: number;
        likes: number;
        faves: number;
        plays: number;
        reposts: number;
        comments: number;
        description: string;
        tags?: any;
        source_info: string;
        cover_image_path: string;
        cover_image_aspect_ratio: string;
        music_file_path: string;
        music_file_mimetype: string;
        song_genres: SongGenre[];
        song_release: Date;
        is_external: boolean;
        custom_genres?: any;
        contributors?: any;
        linked_crews: any[];
        liked: boolean;
        commentList: string[]
    }