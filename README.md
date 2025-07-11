// File Structure Overview

/ids-manager-app/
├── client/                       # React frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/           # Reusable UI components
│   │   ├── pages/                # Route-level pages (e.g., Dashboard, CaseDetail)
│   │   ├── hooks/                # Custom React hooks
│   │   ├── services/            # API calls to FastAPI backend
│   │   ├── context/             # Global state providers (Auth, AppContext)
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── vite.config.js
│
├── server/                       # FastAPI backend
│   ├── app/
│   │   ├── api/                  # Route definitions
│   │   │   ├── auth.py
│   │   │   ├── cases.py
│   │   │   ├── references.py
│   │   │   └── users.py
│   │   ├── core/                 # App settings, config
│   │   │   └── config.py
│   │   ├── db/
│   │   │   ├── base.py           # SQLAlchemy Base
│   │   │   ├── models.py         # SQLAlchemy models
│   │   │   ├── schemas.py        # Pydantic schemas
│   │   │   └── session.py        # DB connection/session
│   │   ├── services/             # Business logic
│   │   ├── main.py               # FastAPI entrypoint
│   └── requirements.txt
│
├── alembic/                      # DB migrations
├── .env                          # Secrets/config
└── README.md


// React App Flow
1. User logs in → Auth context stores token
2. Dashboard fetches list of active cases
3. Clicking a case → CaseDetail page shows:
   - Summary of patent app info
   - List of references
   - IDS submission history
4. User can:
   - Upload/reference prior art
   - Associate prior art with one or more cases
   - Export/download formatted IDS
