# InNuCE Lab - Web Platform Frontend

The official web platform for **InNuCE Lab** (Innovative Neuromorphic Computing Engineering) at EDA Group, Politecnico di Torino.

This repository is a modern, standalone **React 19 + Vite** single-page application engineered with a clean **Service Layer** architecture. It decouples all dynamic collections (research papers, team members, lab infrastructures, and use case studies) from UI presentation, making it ready for seamless backend integration.

---

## 🚀 Key Features & Highlights

- **Decoupled Service Layer**: All data operations flow through `src/services/api.js`, enabling painless swapping between local JSON datasets and real backend REST endpoints.
- **Async Query State Management**: Powered by `@tanstack/react-query` for query caching, loading spinners, and error boundaries.
- **Fluid & Accessible UI**: Responsive layouts built with **Tailwind CSS**, 3D interactive flip cards, and motion animations via **Framer Motion**.
- **Interactive Use Case & Research Explorer**: Filterable multi-tag showcase, pagination with auto-scroll and accordion expanders, and direct links to papers and NotebookLM summaries.

---

## 📁 Project Structure

```text
├── public/                 # Static public assets (favicon.svg, icons.svg)
├── src/
│   ├── assets/             # Vector icons, SVG diagrams, and brand marks
│   ├── components/         # Shared UI components
│   │   ├── Header.jsx      # Navigation header with auto-closing mobile menu
│   │   ├── Footer.jsx      # Institutional affiliations and social links
│   │   ├── LoadingSpinner.jsx # Reusable themed loading indicator
│   │   ├── PublicLayout.jsx   # Page wrapper with overflow protection
│   │   └── ScrollToTop.jsx    # Smooth scroll-to-top on route changes
│   ├── data/               # Structured local JSON databases
│   │   ├── resources.json  # 60+ publications, papers & research tags
│   │   ├── team.json       # Research team members & profile links
│   │   ├── infrastructures.json # Supported lab tools & neuromorphic hardware
│   │   └── useCases.json   # Deep dive research studies & multi-section details
│   ├── pages/              # Route pages (Home, UseCases, Resources, Infrastructure, AboutUs, Services, RequestAccess, NotFound)
│   ├── services/
│   │   └── api.js          # Backend-ready API service layer
│   ├── App.jsx             # React Router configuration
│   ├── index.css           # Global typography and base CSS
│   └── main.jsx            # Application entrypoint
├── index.html              # HTML shell with InNuCE Lab branding
├── package.json            # Scripts & dependencies
├── tailwind.config.js      # Custom theme & animation tokens
└── vite.config.js          # Vite build configuration
```

---

## 🔌 Service Layer & Data Schemas

All dynamic collections are managed through `src/services/api.js`:

| Function | Description | Source File |
| :--- | :--- | :--- |
| `getResources()` | Returns list of papers, publications, and tags | `src/data/resources.json` |
| `getTeam()` | Returns lab researchers, roles, and profiles | `src/data/team.json` |
| `getInfrastructures()` | Returns neuromorphic tools & hardware platforms | `src/data/infrastructures.json` |
| `getUseCases()` | Returns use case cards & summary tags | `src/data/useCases.json` |
| `getUseCaseById(id)` | Returns comprehensive multi-section study by ID | `src/data/useCases.json` |
| `submitAccessRequest(data)` | Asynchronously submits platform access requests | API mock / Ready for POST |

### Connecting to a Live Backend
To wire the frontend to a live REST server, simply update `src/services/api.js` to replace the local JSON imports with standard `fetch()` or `axios` calls:

```javascript
// Example: Switching to a live API endpoint
export async function getResources() {
  const res = await fetch(`${API_BASE_URL}/api/resources`);
  if (!res.ok) throw new Error('Failed to fetch resources');
  return res.json();
}
```
No changes to components or pages are needed.

---

## 🛠️ Getting Started

### Prerequisites
- **Node.js** (`^20.19.0 || >=22.12.0`)
- **npm** (v10 or higher)

### Installation
```bash
git clone <repository-url>
cd Final_InnuceWebsite
npm install
```

### Development Server
Starts the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### Production Build
Compiles minified production static assets (HTML, CSS, JS, and optimized SVG assets) into the `dist/` directory via Vite:
```bash
npm run build
```

### Preview Production Build
Locally preview the production build output:
```bash
npm run preview
```

### Code Quality & Linting
Run ESLint across all JavaScript and JSX source files:
```bash
npm run lint
```

---

## 🏛️ Institutions & Credits

Developed for **InNuCE Lab**, EDA Group at **Politecnico di Torino** in collaboration with:
- **Consiglio Nazionale delle Ricerche (CNR)**
- **Ministero dell'Università e della Ricerca**
- **European Union NextGenerationEU (EBRAINS Italy)**
- **Italia Domani (PNRR)**
