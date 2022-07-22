/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      minHeight: {
        '8': '32px',
      },
      minWidth: {
        '8': '32px',
      }
    },
    colors: {
      'white':'white',
      'port-light-green':'#25C28D',
      'port-dark-green':'#20AF82',
      'port-faded-gray':'#8E8E8E',
      'port-superlight-green':'#E0F2EF',
      'port-dark-gray':'#292B2E',
      'port-link-blue':'#7AB8F6',
      'port-link-blue-hover':'#60A2E0',
      'port-dark-blue':'#1E293B',
      'port-darker-blue':'#121720',
    }
  },
  plugins: [],
}
