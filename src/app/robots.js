export default function robots() {
    return {
      rules: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/private/', '/admin/']
        }
      ],
      sitemap: 'https://drvishnuagrawal.in/sitemap.xml',
    }
  }