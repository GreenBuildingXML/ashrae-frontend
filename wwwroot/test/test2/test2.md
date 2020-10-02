# Test Case 02 – Virtual space separator
## Test Description:
In BIM model, spaces are built according to drawings. Such spaces are being called architectural space. However, in performance analysis, for instance, energy simulation, spaces are often divided based by thermal zones, where the zones are separated by space function, orientation, air terminals etc. It is common to subdivide architecture spaces into thermal zones. Virtual space separator is the tool that used often to perform the space subdivision in a BIM software. This test case focuses on how well the gbXML export function can translate the virtual space separator into a gbXML model, and correctly identify the two thermal zones from one architecture space.
## Spaces / Rooms/Surface:
There are two thermal zones in this test model named as “Level_1_Space_1” and “level_1_space_2”
## Special Considerations:
1.	The model is 10’ x 10’ x 10’ (middle line)
2.	All the walls face to an orientation shall be named as: “[orientation]_wall_[custom index]”
3.	All the other surfaces shall be named as their function, such as “interior_wall_[custom index]
4.	The custom index is an index to differentiate the same type surfaces. The tester can decide how to label the custom index.


## Guideline for creating the BIM model:
### Figure 1. Isometric View
Shows a 3-dimensional isometric view of this test model.
### Figure 2. Floor and Ceiling Plan View
Shows a typical floor plan to indicate dimensions and directions of the space, with wall thickness. The dashed line represents the profile of the shading of the roof.
### Figure 3. Section View
Shows a typical section view to indicate positions and dimensions of the slab floor, the height of the roof and the ceiling element.
