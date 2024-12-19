# theFirstRepository

## Practicing git and github convections in line with weekly learnable task

### **Version Control**

Version control is a system that helps track changes to files over time. It allows multiple people to collaborate on a project, keeps a history of all changes made, and enables the restoration of earlier versions if needed. It is commonly used in software development to manage source code.

---

### **Difference Between Git and GitHub**

1. **Git**:

   - A distributed version control system used to track changes in files and coordinate work among team members.
   - Installed locally on your computer.
   - Works offline once the repository is cloned.
   - Commands: `git init`, `git add`, `git commit`, `git push`, etc.

2. **GitHub**:
   - A cloud-based platform for hosting and managing Git repositories.
   - Provides collaboration tools like pull requests, issue tracking, and project boards.
   - Requires an internet connection to access repositories stored on its servers.

### **3 GitHub Alternatives**

1. **GitLab**: Offers features like CI/CD pipelines, issue tracking, and code hosting.
2. **Bitbucket**: Popular for small teams, supports Git and Mercurial.
3. **SourceForge**: Used for open-source projects with hosting and collaboration tools.

---

### **Difference Between `git fetch` and `git pull`**

1. **`git fetch`**:

   - Downloads changes from the remote repository but doesn’t integrate them into your local branch.
   - Used to check for updates without affecting your working branch.
   - Example:
     ```bash
     git fetch origin
     ```

2. **`git pull`**:
   - Combines `git fetch` and `git merge`. It fetches changes and automatically merges them into your current branch.
   - Can lead to conflicts if there are changes in your local branch.
   - Example:
     ```bash
     git pull origin main
     ```

---

### **Git Rebase**

- **What it Does**: Moves your branch to the tip of another branch, replaying your changes on top of it. This creates a linear history by avoiding merge commits.
- **When to Use**: When you want to clean up the commit history or incorporate changes from the main branch into your feature branch without a merge commit.

**Command**:

```bash
git rebase main
```

Example Workflow:

1. You’re on a feature branch.
2. Rebase it to the latest `main` branch:
   ```bash
   git checkout feature-branch
   git rebase main
   ```

---

### **Git Cherry-Pick (Simplified)**

- **What it Does**: Copies a specific commit from one branch and applies it to another. Useful for bringing in individual fixes or features without merging the entire branch.
- **When to Use**: When you only need a particular commit from another branch.

**Command**:

```bash
git cherry-pick <commit-hash>
```

Example Workflow:

1. Get the commit hash of the change you want (e.g., from `git log`).
2. Apply the commit to your branch:
   ```bash
   git cherry-pick abc1234
   ```
