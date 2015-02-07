var sum = 0;
for (i = 2, len = process.argv.length; i < len; i++) {
	sum += parseFloat(process.argv[i]);
}

console.log(sum);