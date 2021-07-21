class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, newColor: int) -> List[List[int]]:
        return self.dfs(image, sr, sc, image[sr][sc], newColor)
    
    def dfs(self, img, sr, sc, oldColor, newColor):        
        if((sr >= 0 and sr < len(img)) and (sc >= 0 and sc < len(img[sr])) and oldColor != newColor):
            if(oldColor == img[sr][sc]):
                img[sr][sc] = newColor
                self.dfs(img, sr - 1, sc, oldColor, newColor)
                self.dfs(img, sr, sc + 1, oldColor, newColor)
                self.dfs(img, sr + 1, sc, oldColor, newColor)
                self.dfs(img, sr, sc - 1, oldColor, newColor)

        return img
            
# (x, y) oldColor -> newColor
# (1, 1) 1 -> 2
#   (0, 1) 1 -> 2
#       <- (-1, 1)
#       (0, 2) 