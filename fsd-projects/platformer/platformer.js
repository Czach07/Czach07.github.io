$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms

    createPlatform(200, 650, 150, 50, "aqua"); 
    createPlatform(300, 550, 150, 50, "lime");
    createPlatform(500, 600, 150, 50, "teal");
    createPlatform(700, 655, 150, 50, "red");
    createPlatform(900, 650, 150, 50, "orange");
    createPlatform(1150, 550, 150, 50, "purple");


    // TODO 3 - Create Collectables

    createCollectable("database", 200, 180, 0.5, 0.7);
    createCollectable("steve", 400, 180, 0.5, 0.7);
    createCollectable("diamond", 545, 180, 0.5, 0.7);
    createCollectable("grace", 774, 180, 0.5, 0.7);
    createCollectable("kennedi", 934, 180, 0.5, 0.7);
    createCollectable("max", 1160, 180, 0.5, 0.7);
    
    // TODO 4 - Create Cannons
    createCannon("top", 500, 1000);
    createCannon("right", 300, 2000);
    createCannon("bottom", 700, 1500)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
