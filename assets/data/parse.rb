require "byebug"
require "json"

paths = ["./2016.csv"]

# , "./assets/data/2015.csv", "./assets/data/2014.csv"

    # each entry is an object that represents a row
    output = []

paths.each do |path|

    file = File.open(path, "r")

    # array of keys
    keys = file.first.split(",")
    
    keys.each_with_index do |k, idx|
        # strip /r /n
        keys[idx] = k.chomp
    end
    
    file.each_line do |line|
        obj = {}
        line = line.split(",")
        keys.each_with_index do |k, i|
            obj[k] = line[i].chomp
        end

        output.push(obj)
    end
end

# res = { "data" => output }

File.open("data.json", "w") {|file| file.write(output.to_json)}