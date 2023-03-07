export const contactFormMockValue = {
  name: 'Papa Gula',
  email: 'papa@gula.com',
  message: 'Hi 👋🏻',
};

export const errorContactFormMockValue = {
  name: 'Mama Garam',
  email: 'mama@garam',
  message: 'Bonjour 👋🏻',
};

export default async function mockFetchSubmitContactForm(url: any) {
  if (url.startsWith('https://formspree.io/f/') && url.includes('mnqypwrw')) {
    return {
      ok: true,
      status: 200,
      json: async () => contactFormMockValue,
    };
  }

  throw new Error(`Unhandled request: ${url}`);
}
