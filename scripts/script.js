var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 80, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( 800, 800 );
renderer.setClearColor(0xffffff, 0)
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 80, 1, 80 );//( x, y, z )
var material = new THREE.MeshBasicMaterial( { color: 'red', wireframe: true, reflectivity : 1 } );
var cube = new THREE.Mesh( geometry, material );
//scene.add( cube );

var geometry2 = new THREE.BoxGeometry( 10, 10, 10 );//( x, y, z )
var material2 = new THREE.MeshBasicMaterial( { color: 'white' } );
var cubo = new THREE.Mesh( geometry2, material2 );
//scene.add( cubo );

controls = new THREE.OrbitControls(camera, renderer.domElement);
//controls.autoRotate = true
//controls.autoRotateSpeed = 50.0
controls.enableDamping = true
controls.dampingFactor = 1.5

var light = new THREE.AmbientLight( 0x404040, 100.0 )
var light2 = new THREE.PointLight( 0xffffff )

scene.add( light, light2 )

var geometry3 = new THREE.CubeGeometry(20,20,20);
var cubeMaterials = [ 
    new THREE.MeshBasicMaterial({color:'green', transparent:true, opacity:0.8, side: THREE.DoubleSide}),
    new THREE.MeshBasicMaterial({color:'red', transparent:true, opacity:0.8, side: THREE.DoubleSide}), 
    new THREE.MeshBasicMaterial({color:'blue', transparent:true, opacity:0.2, side: THREE.DoubleSide}),
    new THREE.MeshBasicMaterial({color:'purple', transparent:true, opacity:0.8, side: THREE.DoubleSide}), 
    new THREE.MeshBasicMaterial({color:'white', transparent:true, opacity:0.8, side: THREE.DoubleSide}), 
    new THREE.MeshBasicMaterial({color:'gray', transparent:true, opacity:0.8, side: THREE.DoubleSide}), 
];

var cubeMaterial = new THREE.MeshFaceMaterial(cubeMaterials); 
var cube2 = new THREE.Mesh(geometry3, cubeMaterial);
scene.add( cube2 );



var geometryy = new THREE.PlaneGeometry( 100, 100, 100 );
var materiall = new THREE.MeshBasicMaterial( {color: 'beige', side: THREE.DoubleSide} );
var plane = new THREE.Mesh( geometryy, materiall );
scene.add( plane );

cubo.position.y = 20
	
camera.position.z = 100;
camera.position.y = -10;
//camera.position.x = 0;
cube2.position.y = 11

var animate = function () {
	requestAnimationFrame( animate );

	cube.rotation.x = 0.20;
    cubo.rotation.y += 0.01;
	cubo.rotation.z += 0.01;
	//cube2.rotation.y += 0.01
	plane.rotation.x = 90 * (Math.PI / 180)
	
	controls.update()
		

	renderer.render( scene, camera );
};

animate();