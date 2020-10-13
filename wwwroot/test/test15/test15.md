# Test Case 15 – Curtain Wall
## Test Description:
Curtain wall is a thin, aluminum framed building cladding system that is used to keep the interior of the building remains airtight. The system usually uses glass as the panel between its frame. This test case creates a curtain wall system in a 10’x10’ building. The purpose is to test the capability of exporting the curtain wall into a gbXML model.
## Spaces / Rooms:
There is only one space in this test model. It is named as “level_1_space_1”. The space shape is the same as the building shape.
## Special Considerations:
1.	The model is 10’ x 10’ x 10’ (Center line)
2.	The wall thickness is 8”
3.	The both thicknesses of roof and slab on grade are 1’.
4.	All the walls face to an orientation shall be named as: “[orientation]_wall_[custom index]”
5.	All the other surfaces shall be named as their function, such as “interior_wall_[custom index]”
6.	The custom index is an index to differentiate the same type surfaces. The tester can decide how to label the custom index.



## Description of Test Case:
### Figure 1. Isometric View
Shows a 3-dimensional isometric view of this test model.
### Figure 2. Floor and Ceiling Plan View
Shows a typical floor plan to indicate dimensions and directions of the space, with wall thickness, which are important for the gbXML space and surface definitions.  
### Figure 3. Section View
Shows the south elevation view to indicate positions and dimensions of the slab floor, roof or ceiling elements.
