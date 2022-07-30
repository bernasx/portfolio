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
        '80': '320px'
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
      'port-light-gray': '#DBDBDB',
      'port-superlight-green':'#CBE9E4',
      'port-dark-gray':'#292B2E',
      'port-link-blue':'#7AB8F6',
      'port-link-blue-hover':'#60A2E0',
      'port-dark-link-blue':'#6191C2',
      'port-dark-link-blue-hover':'#4B7196',
      'port-dark-blue':'#1E293B',
      'port-darker-blue':'#121720',
      'port-darker-blue-hover':'#171D29',
      'port-status-live':'#60E179',
      'port-status-complete':'#EBE654',
      'port-status-prototype':'#E8AC44',
      'port-status-incomplete':'#E63232',
      'port-light-bg':'#F1F3F3'
    }
  },
  plugins: [],
}
