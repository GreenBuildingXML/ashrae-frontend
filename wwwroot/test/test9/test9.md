# Test Case 09 – Interior Window
## Test Description:
It is common to find a concrete patio extended from a slab on grade foundation. In BIM model, the patio and slab on grade could be drawn in a same component. In such scenario, the exported gbXML model should correctly identify the slab on grade surface and patio surface from the
## Spaces / Rooms:
There are two spaces in this test model. Both of them are on the same level, separated by the interior wall. One space name is “level_1_space_1” and the other is “level_1_space_2”.
## Special Considerations:
1.	The model is 10’ x 10’ x 10’ (center line)
2.	The interior wall is located in the middle of the building, with a thickness of 8”.
3.	All the walls face to an orientation shall be named as: “[orientation]_wall_[custom index]”
4.	All the other surfaces shall be named as their function, such as “interior_wall_[custom index]
5.	The custom index is an index to differentiate the same type surfaces. The tester can decide how to label the custom index.


## Description of Test Case:
### Figure 1. Isometric View
Shows a 3-dimensional isometric view of this test model.
### Figure 2. Floor and Ceiling Plan View
Shows the floor plan to indicate dimensions and directions of the space, with wall thickness, which are important for the gbXML space and surface definitions.  

### Figure 3. Section View
Shows the elevation view to indicate positions and dimensions of the interior window, slab floor and roof elements.
