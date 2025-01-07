function capitalize(str: string): string {
    if (!str) return str; // Return the string as-is if it's empty
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  

  export default capitalize