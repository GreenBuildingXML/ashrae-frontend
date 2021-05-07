# Test Case 5 – Raised Floor and Drop Ceiling
## Test Description:
Raised floor and drop ceilings are commonly seen structures in many commercial buildings. A raised floor provides an elevated floor above the substrate to create a hidden passage for various reasons such as allowing for air flow or for mechanical/electrical service passage. Similarly, a drop ceiling creates a plenum space to hide building infrastructures such as piping, wiring and duct work. It is important to identify these spaces as plenums when exported into gbXML. This test case will include both structures in a two-story BIM. The first story will have an 8” drop ceiling space with 4” thick ceiling. The second story will have an 8” raised floor space with 4” thick flooring.
## Spaces / Rooms:
There are four spaces in this test model. One space is located below the first floor ceiling, named “level_1_space_1”. One space is located in between the first floor ceiling and the second floor flooring. This is “level_1_plenum_1” and must be identified as a plenum. The third space is located above the second floor raised floor, named “level_2_space_1”. The fourth space is located in between the second floor flooring and the second floor raised floor. It is named “level_2_plenum_1” and must be identified as a plenum.
## Special Considerations:
1.	The model is 10’ x 10’ x 21’ (including floor and roof thickness, using center line)
2.	The model has two stories and each story is one space.
3.	For the sake of simplicity, the plenum space created by the ceiling is 8” high and the ceiling is 4” thick. Similarly, the elevated space created by the floor is 8” high and the flooring thickness is 4”.
4.	The floor, roof and slab-on-grade each have a thickness of 1’.
5.	Wall thickness is 8”.

### Space Volumes and Areas
| Name            | Volume    | Area  |
|-----------------|-----------|-------|
| level_1_space_1 | 696.89 CF | 87 SF |
| level_2_space_1 | 696.89 CF | 87 SF |




## Description of Test Case:
### Figure 1. Isometric View
Shows a 3-dimensional isometric view of this test model.
### Figure 2. Floor and Ceiling Plan View
Shows a typical floor plan to indicate dimensions and directions of the space with wall thickness. The dashed line represents the profile of the shading of the roof.
### Figure 3. Section View
Shows a section view to indicate positions and dimensions of the raised floor and drop ceiling. The floor is raised about 8” and floor thickness is 4”. Similarly, the ceiling is dropped about 7-1/2” and the ceiling thickness is 4-1/2”. The floor, slab-on-grade and roof thickness are assumed to be 1’.
