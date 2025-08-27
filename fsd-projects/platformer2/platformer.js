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
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(1200, 110, 200, 20, "green")
    createPlatform(25, 650, 90, 10, "red")
    createPlatform(1275, 650, 90, 10, "red")
    createPlatform(350, 650, 50, 10, "blue")
    createPlatform(675, 650, 50, 10, "blue")
    createPlatform(1000, 650, 50, 10, "blue")
    createPlatform(195, 300, 75, 10, "yellow", 195, 490, 1)
    createPlatform(490, 300, 75, 10, "yellow", 490, 845, 1.2)
    createPlatform(845, 300, 75, 10, "yellow", 845, 1170, 1.1)
    createPlatform(200, 525, 50, 10, "blue")
    createPlatform(525, 525, 50, 10, "blue")
    createPlatform(850, 525, 50, 10, "blue")
    createPlatform(1150, 525, 50, 10, "blue")
    createPlatform(350, 400, 50, 10, "blue")
    createPlatform(675, 400, 50, 10, "blue")
    createPlatform(1000, 400, 50, 10, "blue")
    createPlatform(200, 200, 50, 10, "blue")
    createPlatform(525, 200, 50, 10, "blue")
    createPlatform(850, 200, 50, 10, "blue")
    createPlatform(1150, 200, 50, 10, "blue")

    // TODO 2 - Create Collectables
    createCollectable("database", 1325, 50, 0)

    // TODO 4 - Create Cannons
    createCannon("left", 635, 50)
    createCannon("right", 785, 50)
    createCannon("right", 218, 1250)

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
