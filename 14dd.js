// Function to get the current date in dd/mm/yyyy format
function getCurrentDate() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = now.getFullYear();
    return `${day}/${month}/${year}`;
}

// Function to get the current time in hh.mm.ss format
function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours}.${minutes}.${seconds}`;
}

// Function to get relative time
function getRelativeTime(postTime) {
    const now = new Date();
    const postDate = new Date(postTime);
    const differenceInSeconds = Math.floor((now - postDate) / 1000);
    
    const minutes = Math.floor(differenceInSeconds / 60);
    const hours = Math.floor(differenceInSeconds / 3600);
    const days = Math.floor(differenceInSeconds / 86400);
    const months = now.getMonth() - postDate.getMonth() + (12 * (now.getFullYear() - postDate.getFullYear()));

    if (months > 0) {
        return months === 1 ? '1 month ago' :`${months} months ago`;
    } else if (days > 0) {
        return days === 1 ? '1 day ago' : $`{days} days ago`;
    } else if (hours > 0) {
        return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
    } else if (minutes > 0) {
        return minutes === 1 ? '1 minute ago' :` ${minutes} minutes ago`;
    } else {
        return differenceInSeconds === 1 ? '1 second ago' : `${differenceInSeconds} seconds ago`;
    }
}

// Example usage
console.log("Current Date:", getCurrentDate());
console.log("Current Time:", getCurrentTime());

// Simulating a post time (e.g., 2 minutes ago)
const postTime = new Date();
postTime.setMinutes(postTime.getMinutes() - 2); // Simulate a post 2 minutes ago
console.log("Post Time:", postTime);
console.log("Relative Time:", getRelativeTime(postTime));