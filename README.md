# Painless Portfolio

A modern, responsive portfolio website built with React and Vite, showcasing personal projects, services, and contact information.

## Description

This is a single-page application (SPA) portfolio website designed to highlight professional skills, past projects, and services offered. It features smooth navigation, interactive components, and a clean, user-friendly interface.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **Interactive Navigation**: Floating navigation bar for easy access to sections.
- **Portfolio Showcase**: Display of projects with categories and details.
- **Services Section**: Overview of offered services.
- **Testimonials**: Client or peer testimonials.
- **Contact Form**: Integrated contact form using Formspree for inquiries.
- **FAQs**: Frequently asked questions section.
- **About Section**: Personal introduction and background.

## Technologies Used

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: CSS Modules
- **Icons**: React Icons
- **Forms**: Formspree
- **Linting**: ESLint
- **Development**: Hot Module Replacement (HMR)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/painless-portfolio.git
   cd painless-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port specified by Vite).

## Usage

- Navigate through the sections using the navbar or floating nav.
- View portfolio items by category.
- Submit inquiries via the contact form.
- Customize content in the respective component files.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run lint`: Run ESLint for code quality checks.
- `npm run preview`: Preview the production build locally.

## Project Structure

```
painless-portfolio/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── CategoryBtn.jsx
│   │   └── ...
│   ├── sections/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── faqs/
│   │   ├── floating-nav/
│   │   ├── footer/
│   │   ├── header/
│   │   ├── navbar/
│   │   ├── portfolio/
│   │   ├── services/
│   │   └── testimonials/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── package.json
├── vite.config.js
└── README.md
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

1. Fork the project.
2. Create a feature branch: `git checkout -b feature/new-feature`.
3. Commit your changes: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature/new-feature`.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For inquiries or collaborations, reach out via the contact form on the website or email at your.email@example.com.

---

Built with ❤️ using React and Vite.
