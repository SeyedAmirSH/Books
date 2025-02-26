function processData(input) {
    try {
      if (typeof input !== 'string') { 
        throw new Error('Invalid input: Input must be a string.');
      }
      
      const result = input.toUpperCase();
      console.log('Processed result:', result);  
      return result;
    } catch (error) {  
      console.error('Error:', error.message);
      return null;  
    }
  }
  
  const userInput = 'hello, world';
  const processedResult = processData(userInput);
  
  if (processedResult) {
    console.log('Final result:', processedResult);
  } else {
    console.log('Failed to process the input.');
  }
  