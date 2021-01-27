# Test Case 2 – Zoning with Two Spaces
## Test Description:
In a BIM, spaces are built according to drawings. Such spaces are often called an "architectural space". However, in performance analysis such as energy simulation, spaces are often divided by thermal zones, where the zones are separated by space function, orientation, air terminals, etc. It is common to subdivide architectural spaces into thermal zones. A virtual space separator is the tool that is often used to perform the space subdivision in BIM authoring software. This test case focuses on how well the gbXML export function can translate the virtual space separator into a gbXML model and correctly identify the two thermal zones from one architectural space.
## Spaces / Rooms/Surface:
There are two thermal zones in this test model named “level_1_space_1” and “level_1_space_2, respectively.”
## Special Considerations:

1.	The model is 10’ x 10’ x 10’ (middle line)

### Space Volumes and Areas

| Name            | Volume    | Area  |
|-----------------|-----------|-------|
| level_1_space_1 | 392.00 CF | 44 SF |
| level_1_space_2 | 392.00 CF | 44 SF |

## Guideline for creating the BIM model:

### Figure 1. Isometric View
Shows a 3-dimensional isometric view of this test model.

### Figure 2. Floor and Ceiling Plan View
Shows a typical floor plan to indicate dimensions and directions of the space, with wall thickness. The dashed line represents the profile of the shading of the roof.

### Figure 3. Section View
Shows a typical section view to indicate positions and dimensions of the slab floor, the height of the roof, and the ceiling element.
