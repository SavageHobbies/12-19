// Create new config file to manage API URLs
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

    export const config = {
      apiUrl: API_BASE_URL,
      endpoints: {
        auth: `${API_BASE_URL}/auth/login`,
        rss: `${API_BASE_URL}/rss`,
        services: `${API_BASE_URL}/services`,
        specialOffers: `${API_BASE_URL}/special-offers`,
        featureToggles: `${API_BASE_URL}/feature-toggles`
      }
    };
