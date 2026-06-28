const fs = require('fs');
const path = require('path');

const target = '../.next';
const link = path.join(__dirname, '../public/_next');

try {
  // If running on Windows, symlinks require administrator privileges, so we can skip or log warning
  if (process.platform === 'win32') {
    console.log('ℹ️ Windows detected. Skipping symlink creation (not needed locally, Next.js handles it).');
  } else {
    // Delete existing symlink if it exists
    if (fs.existsSync(link)) {
      try {
        fs.unlinkSync(link);
      } catch (err) {
        // Might be a directory, try rmdir
        fs.rmdirSync(link, { recursive: true });
      }
    }
    
    // Create symlink: public/_next -> ../.next
    fs.symlinkSync(target, link, 'dir');
    console.log('✅ Created production symlink: public/_next -> ../.next');
  }
} catch (error) {
  console.warn('⚠️ Could not create symlink (might require SSH permissions):', error.message);
}
