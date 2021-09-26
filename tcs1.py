n=int(input())
a=[]
for i in range(n):
    k=input()
    a.append(int(k))
D=int(input())
X=int(input())
count=0
if D % 2 ==0:
    for i in a:
        if i%2!=0:
            count+=1
else:
    for i in a:
        if i%2==0:
            count+=1  
print(X*count)            