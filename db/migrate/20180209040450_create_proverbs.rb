class CreateProverbs < ActiveRecord::Migration[5.1]
  def change
    create_table :proverbs do |t|
      t.text :content
      t.text :meaning
      t.string :source

      t.timestamps
    end
  end
end
