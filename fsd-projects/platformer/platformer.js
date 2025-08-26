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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(0, 150, 400, 20, "blue")
    createPlatform(0, 400, 400, 20, "blue")
    createPlatform(100, 275, 400, 20, "blue")
    createPlatform(100, 525, 400, 20, "blue")
    createPlatform(480, 0, 120, 600, "green")
    createPlatform(900, 100, 200, 640, "green")
    createPlatform(800, 610, 100, 20, "blue")
    createPlatform(600, 480, 100, 20, "blue")
    createPlatform(800, 350, 100, 20, "blue")
    createPlatform(600, 225, 100, 20, "blue")
    createPlatform(800, 100, 100, 20, "blue")
    createPlatform(1100, 100, 100, 250, "blue")
    createPlatform(1300, 0, 100, 200, "green")
    createPlatform(1300, 300, 1000, 440, "green")
    // TODO 3 - Create Collectables
    createCollectable("database", 1130, 690, 0)
    createCollectable("diamond", 625, 425, 0)
    createCollectable("steve", 25, 275, 0)
    createCollectable("max", 425, 675, 0)
    createCollectable("grace", 825, 40, 0)
    // TODO 4 - Create Cannons
    createCannon("bottom", 1200, 1000)
    createCannon("top", 310, 1000)
    createCannon("bottom", 690, 1000)
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
