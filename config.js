// This file will be replaced with actual environment variables during build/setup
window.config = {
    GOOGLE_API_KEY: 'AIzaSyDaSzsIhpeXSoZwT_kEH7SXquzlsibOoDM'
};

// If we're running in a Node.js environment (like during build), load from .env
if (typeof process !== 'undefined' && process.env) {
    try {
        const fs = require('fs');
        const path = require('path');
        const envPath = path.resolve(__dirname, '.env');
        
        if (fs.existsSync(envPath)) {
            const envContent = fs.readFileSync(envPath, 'utf8');
            envContent.split('\n').forEach(line => {
                const match = line.match(/^([^=]+)=(.*)$/);
                if (match) {
                    const key = match[1].trim();
                    const value = match[2].trim().replace(/['"]+/g, '');
                    if (key && value) {
                        config[key] = value;
                    }
                }
            });
        }
    } catch (e) {
        console.warn('Could not load .env file, using default config');
    }
}
