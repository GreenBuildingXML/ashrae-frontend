# Test Case 08 – Appressed Floor and Ceiling with Thickness
## Test Description:
In BIM model, floors and ceilings typically have more than 1” thickness.  When those building elements are exported into gbXML model, inconsistent geometric interpretations are found in BIM software. This test case provides a standard approach to handle floor and ceiling thickness in the exported gbXML model.
## Spaces / Rooms:
There are two spaces in this test model. One space is located at the first floor, named as “level_1_space_1”. The other one is located at the second floor, named as “level_2_space_1”.
## Special Considerations:
1.	The model is 10’ x 10’ x 22’ (including floor and roof thickness)
2.	The model has two stories and each story is one space.
3.	There is no empty space between the ceiling in lower level and the floor in upper level.
### Space Volumes and Areas
| Name            | Volume    | Area  |
|-----------------|-----------|-------|
| level_1_space_1 | 769.48 CF | 87 SF |
| level_2_space_1 | 784.00 CF | 87 SF |

## Description of Test Case:
### Figure 1. Isometric View
Shows a 3-dimensional isometric view of this test model. Walls locates between the slab floor and the roof.
### Figure 2. Floor and Ceiling Plan View
Shows a typical floor plan to indicate dimensions and directions of the space, with wall thickness. The dashed line represents the profile of the shading of the roof.  

### Figure 3. Section View
Shows a typical section view to indicate positions and dimensions of the slab floor, the height of the roof and the ceiling element.
