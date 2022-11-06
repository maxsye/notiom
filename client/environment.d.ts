declare global {
    namespace NodeJS {
        interface ProcessEnv {
            SUPABASE_URL: string;
            SUPABASE_ANON_KEY: string;
            SUPABASE_ADMIN_KEY: string;
        }
    }
}

export {};