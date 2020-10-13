# Test Case 14 – Roof overhang
## Test Description:
Typically, a roof will have overhangs for various functions, such as roof ventilation and rainwater controls. Overhangs also provide shading to the walls under them. Therefore, it is critical to model overhangs in performance analysis. This test case will demonstrate how overhang can be modeled in the gbXML as well as helps the software developer to test the gbXML export function regarding roof overhangs.
## Spaces / Rooms:
There is one space in this test model named as “level_1_space_1”.
## Special Considerations:
1.	The model is 10’ x 10’ x 10’.
2.	The dimensions are taken from the center lines.
3.	The roof dimension is 12’8” x 12’8”.
4.	All the walls face to an orientation shall be named as: “[orientation]_wall_[custom index]”
5.	All the other surfaces shall be named as their function, such as “interior_wall_[custom index]”
6.	The custom index is an index to differentiate the same type surfaces. The tester can decide how to label the custom index.


## Description of Test Case:
### Figure 1. Isometric View
Shows a 3-dimensional isometric view of this test model.
### Figure 2. Floor and Ceiling Plan View
Shows a typical floor plan to indicate dimensions and directions of the space, with wall thickness. The dashed line represents the profile of the shading of the roof.  
### Figure 3. Section View
Shows a typical section view to indicate positions and dimensions of the slab floor, the height of the roof and the ceiling element.
