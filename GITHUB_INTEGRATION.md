# React Todo - GitHub Integrated

## 📚 Quick Reference

### Environment Setup
```bash
# Copy the example file
cp .env.example .env.local

# Add your GitHub token
# Get token from: https://github.com/settings/tokens
# Required scopes: repo, gist
```

### GitHub API Integration
- **Endpoint**: `/repos/{owner}/{repo}/contents/todos.json`
- **Method**: `PUT` for saving, `GET` for loading
- **Authentication**: Personal Access Token (required for write operations)
- **Data Format**: Base64 encoded JSON

### Key Features
- ✅ Auto-sync to GitHub
- ✅ Fallback to localStorage
- ✅ Loading states
- ✅ Error handling
- ✅ Offline support

### File Structure
```
src/
├── hooks/
│   └── useGithubTodos.js    # GitHub API integration
├── components/
│   └── TodoApp.jsx          # Uses useGithubTodos hook
└── ...
```

### Development
```bash
npm install
npm run dev
```

### Troubleshooting
- Check `.env.local` exists and has token
- Verify token scopes include `repo`
- Check browser console for errors (F12)
- Token must have write access to repository
