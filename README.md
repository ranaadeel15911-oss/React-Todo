# React Todo - GitHub Integrated Task Management

A comprehensive, feature-rich todo application built with React.js that **automatically syncs all data to GitHub**. Well-organized, reusable components with professional styling and GitHub integration.

## ✨ Features

### Core Functionality
- ✅ **Add todos** - Create new tasks with ease
- 🗑️ **Delete todos** - Remove completed or unwanted tasks
- ✏️ **Edit todos** - Modify existing todo text
- ✔️ **Mark complete** - Toggle todo completion status
- 🔍 **Filter todos** - View All, Active, or Completed tasks
- 🗑️ **Clear completed** - Batch remove all completed todos

### GitHub Integration 🚀
- 💾 **Auto-save to GitHub** - Every change is automatically saved
- ☁️ **Cloud storage** - Access your todos from anywhere
- 🔄 **Sync across devices** - View todos on multiple devices
- 📊 **GitHub as database** - No backend server needed
- 🛡️ **Automatic backup** - Local storage fallback when offline

### Advanced Features
- 📊 **Progress tracking** - Visual completion rate with progress bar
- ⏰ **Timestamps** - Track when each todo was created
- 📱 **Responsive design** - Works on desktop, tablet, and mobile
- 🎨 **Modern UI** - Beautiful gradients, animations, and smooth transitions
- 📈 **Statistics** - View total, active, and completed tasks
- 🔄 **Loading states** - Visual feedback during GitHub sync
- ⚠️ **Error handling** - Graceful fallback to local storage

## 🏗️ Component Architecture

```
src/
├── components/
│   ├── TodoApp.jsx          # Main app with GitHub sync
│   ├── TodoHeader.jsx       # Header with stats
│   ├── TodoInput.jsx        # Add new todo form
│   ├── TodoList.jsx         # Todo list container
│   ├── TodoItem.jsx         # Individual todo with actions
│   ├── TodoFilter.jsx       # Filter tabs
│   └── TodoStats.jsx        # Statistics and progress
├── hooks/
│   ├── useTodos.js          # Local storage hook
│   └── useGithubTodos.js    # GitHub integration hook
├── styles/
│   ├── TodoApp.css
│   ├── TodoHeader.css
│   ├── TodoInput.css
│   ├── TodoFilter.css
│   ├── TodoItem.css
│   ├── TodoList.css
│   └── TodoStats.css
├── App.jsx                  # Root component
└── main.jsx                 # Entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- GitHub Personal Access Token (for GitHub integration)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ranaadeel15911-oss/React-Todo.git
   cd React-Todo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env.local
   ```

4. **Add GitHub Personal Access Token**
   
   Generate a token at: https://github.com/settings/tokens
   
   Required scopes:
   - `repo` (full control of private repositories)
   - `gist` (create gists)
   
   Update `.env.local`:
   ```
   VITE_GITHUB_TOKEN=your_token_here
   VITE_GITHUB_OWNER=your_username
   VITE_GITHUB_REPO=React-Todo
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open in browser**
   Navigate to `http://localhost:3000`

### Build for Production
```bash
npm run build
```

## 🔐 GitHub Token Setup

### Creating a Personal Access Token

1. Go to [GitHub Settings → Developer settings → Personal access tokens](https://github.com/settings/tokens)
2. Click "Generate new token"
3. Give it a name (e.g., "React Todo App")
4. Select scopes:
   - ✅ `repo` - Full control of private repositories
5. Click "Generate token"
6. Copy the token and add to `.env.local`

### Security Best Practices
- ⚠️ **Never commit `.env.local`** - Already in `.gitignore`
- ⚠️ **Don't share your token** - It's like a password
- 🔄 **Regenerate if compromised** - On GitHub settings
- 🛡️ **Use environment variables** - Not hardcoded values

## 📋 Component Details

### `useGithubTodos` Hook
Custom React hook that manages todo state with GitHub persistence.

**Features:**
- Loads todos from `todos.json` in your GitHub repo
- Saves changes automatically with every action
- Falls back to localStorage if GitHub is unavailable
- Shows loading/error states
- Refreshes from GitHub on demand

**Methods:**
- `addTodo(text)` - Add new todo
- `deleteTodo(id)` - Delete todo
- `toggleTodo(id)` - Mark complete/incomplete
- `updateTodo(id, newText)` - Edit todo text
- `clearCompleted()` - Remove all completed todos
- `refreshTodos()` - Reload from GitHub

### `TodoApp.jsx`
Main application component orchestrating all sub-components with GitHub sync.

**State Management:**
- Uses `useGithubTodos` for persistent storage
- Shows loading spinner during sync
- Displays error banner if sync fails
- Disables input while syncing

### `TodoItem.jsx`
Individual todo component with:
- Checkbox for completion
- Edit/Save/Cancel functionality
- Delete button
- Creation timestamp
- Smooth animations

### `TodoFilter.jsx`
Filter controls with three states:
- All
- Active
- Completed

### `TodoStats.jsx`
Statistics dashboard showing:
- Completion percentage with progress bar
- Number of completed tasks
- Number of active tasks
- Total task count

## 🎨 Styling Features

- **Gradient backgrounds** - Modern purple gradient theme
- **Smooth animations** - Fade in, slide up, and hover effects
- **Loading states** - Visual feedback during operations
- **Error states** - Clear error messages
- **Mobile optimized** - Responsive grid and flexbox layouts
- **Accessibility** - Proper contrast and interactive elements

## 💡 Usage Examples

### Adding a Todo
1. Type task description in input field
2. Click "+ Add" button or press Enter
3. ⏳ Watch for sync confirmation
4. Todo appears in GitHub and all devices

### Editing a Todo
1. Click the ✎ (edit) button on any todo
2. Modify the text
3. Click ✓ (save) or ✕ (cancel)
4. Changes sync to GitHub automatically

### Filtering Todos
1. Click filter buttons: All, Active, or Completed
2. List updates to show only selected todos

### Clearing Completed
1. Click "Clear Completed" button
2. All marked tasks are removed
3. Changes saved to GitHub

## 🔧 Technologies Used

- **React 18** - UI library
- **Vite** - Fast build tool and dev server
- **GitHub API** - Cloud data storage
- **CSS3** - Modern styling with flexbox and grid
- **Local Storage API** - Client-side persistence fallback

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🌐 Deployment

### Deploy to GitHub Pages

1. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/React-Todo/',
     // ... rest of config
   });
   ```

2. Build and deploy:
   ```bash
   npm run build
   npm run deploy
   ```

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

1. Connect repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard
5. Deploy!

## 🚀 Future Enhancements

- [ ] Categories/Tags for todos
- [ ] Due dates and reminders
- [ ] Dark mode toggle
- [ ] Export todos to JSON/CSV
- [ ] Drag and drop reordering
- [ ] Search functionality
- [ ] Collaborative todos with GitHub
- [ ] Todo priorities
- [ ] Recurring todos
- [ ] GitHub Issues integration

## 🐛 Troubleshooting

### "Failed to load todos from GitHub"
- ✅ Check your GitHub token in `.env.local`
- ✅ Ensure token has `repo` scope
- ✅ Verify repository name is correct
- ✅ Check internet connection

### Todos not syncing
- ✅ Open browser console (F12) for error messages
- ✅ Check that `.env.local` has correct values
- ✅ Verify GitHub token hasn't expired
- ✅ Try clicking "Retry" button

### Using offline / no token
- ✅ App works with localStorage only
- ✅ Changes persist locally in browser
- ✅ Data syncs when token is available
- ✅ Add token later to enable GitHub sync

## 📝 License

MIT License - Feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or suggestions, please reach out to [ranaadeel15911-oss](https://github.com/ranaadeel15911-oss)

---

**Happy tasking! 🎉**

**Sync your todos to the cloud with GitHub! ☁️**
