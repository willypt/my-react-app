export function updateBio (newBio) {
  return {  
      type: 'UPDATE_BIO',
      payload: newBio
  }
}