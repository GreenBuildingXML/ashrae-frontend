# Test Case 05 – Raised floor and drop ceiling
## Test Description:
Raised floor and drop ceilings are commonly seen structures in many commercial buildings. Raised floor provides an elevated floor above the substrate to create a hidden passage for various reasons such as air flows or mechanical and electrical service passage. Similarly, drop ceiling creates a plenum space to hide building infrastructures such as piping, wiring and duck work. It is important to identify these spaces as plenum and exported into gbXML. This test case will include both structures in a two-story BIM model. The first story will have an 8” drop ceiling space with 4” thick ceiling. The second story will have an 8” raised floor space with 4” thick flooring.
## Spaces / Rooms:
There are two spaces in this test model. One space is located at the first floor, named as “level_1_space_1”. The other one is located at the second floor, named as “level_2_space_1”.
## Special Considerations:
1.	The model is 10’ x 10’ x 21’ (including floor and roof thickness, using center line)
2.	The model has two stories and each story is one space.
3.	For the purpose of simplicity, the plenum space created by ceiling is 8” high and the ceiling is 4” thick. Similarly, the elevated space created by floor is 8” high and the flooring thickness is 4”.
4.	The structure floor, roof and slab on grade have thickness of 1’.
5.	Wall thickness is 8”.
6.	All the walls face to an orientation shall be named as: “[orientation]_wall_[custom index]”
7.	All the other surfaces shall be named as their function, such as “interior_wall_[custom index]
8.	The custom index is an index to differentiate the same type surfaces. The tester can decide how to label the custom index.


## Description of Test Case:
### Figure 1. Isometric View
Shows a 3-dimensional isometric view of this test model.
### Figure 2. Floor and Ceiling Plan View
Shows a typical floor plan to indicate dimensions and directions of the space, with wall thickness. The dashed line represents the profile of the shading of the roof.
### Figure 3. Section View
Shows a section view to indicate positions and dimensions of the raised floor and drop ceiling. The floor is raised about 8” and floor thickness is 4”. Similarly, the ceiling is dropped about 7-1/2” and the ceiling thickness is 4-1/2”. The floor, slab on grade and roof thickness are assumed to be 1’.
