let db;

const request = indexedDB.open('workout', 1);

request.onupgradeneeded = function(event) {
    const db = event.target.result; 
    db.createObjectStore('stat', { autoIncrement: true }); 
};

request.onsuccess = function (event) {
    db = event.target.result;
    if (navigator.onLine) {
        checkDB(); 
    }
  };

  request.onerror = function (event) {
      console.log('Error: ' + event.target.errorCode);
    };

    function saveThis(record) {
        const workout = db.workout(['stat'], 'readWrite');
        const 
    } 